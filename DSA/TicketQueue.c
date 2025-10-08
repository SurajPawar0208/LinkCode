#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_PENDING_BOOKINGS 10 // Maximum number of pending booking requests
#define MAX_BUSES 3
#define MAX_SEATS_PER_BUS 40
#define MAX_NAME_LENGTH 100

// Structure for a single bus
struct Bus {
    int busNumber;
    int totalSeats;
    int availableSeats;
};

// Structure for a single bus ticket booking request
struct Booking {
    int ticketNumber;
    char customerName[MAX_NAME_LENGTH]; // Added a fixed-size character array
    int busNumber;
    int numSeats;
};

// Circular queue structure
struct Queue {
    struct Booking items[MAX_PENDING_BOOKINGS];
    int front;
    int rear;
};

int lastTicketNumber = 1000;
struct Bus busDatabase[MAX_BUSES] = {
    {101, MAX_SEATS_PER_BUS, MAX_SEATS_PER_BUS},
    {102, MAX_SEATS_PER_BUS, MAX_SEATS_PER_BUS},
    {103, MAX_SEATS_PER_BUS, MAX_SEATS_PER_BUS}
};

// Initialize the queue
void initQueue(struct Queue* q) {
    q->front = -1;
    q->rear = -1;
}

// Check if the queue is full
int isFull(struct Queue* q) {
    return (q->front == 0 && q->rear == MAX_PENDING_BOOKINGS - 1) || (q->rear == (q->front - 1) % (MAX_PENDING_BOOKINGS - 1));
}

// Check if the queue is empty
int isEmpty(struct Queue* q) {
    return q->front == -1;
}

// Add a new booking request to the queue (Enqueue)
void enqueue(struct Queue* q, struct Booking newBooking) {
    if (isFull(q)) {
        printf("\nQueue is full. Cannot add more pending booking requests.\n");
        return;
    }
    if (isEmpty(q)) {
        q->front = 0;
    }
    q->rear = (q->rear + 1) % MAX_PENDING_BOOKINGS;
    q->items[q->rear] = newBooking;
    printf("\nBooking for %s (Ticket #%d) added to the queue.", newBooking.customerName, newBooking.ticketNumber);
}

// Process and confirm the oldest booking request (Dequeue)
void dequeue(struct Queue* q) {
    if (isEmpty(q)) {
        printf("\nQueue is empty. No pending bookings to process.");
        return;
    }
    struct Booking processedBooking = q->items[q->front];
    printf("\nProcessing booking for %s (Ticket #%d)...", processedBooking.customerName, processedBooking.ticketNumber);

    // Find the corresponding bus and update available seats
    for (int i = 0; i < MAX_BUSES; i++) {
        if (busDatabase[i].busNumber == processedBooking.busNumber) {
            busDatabase[i].availableSeats -= processedBooking.numSeats;
            break;
        }
    }
    
    if (q->front == q->rear) {
        q->front = -1;
        q->rear = -1;
    } else {
        q->front = (q->front + 1) % MAX_PENDING_BOOKINGS;
    }
    
    printf("\nBooking for %s confirmed and removed from queue.", processedBooking.customerName);
}

// Display all pending booking requests in the queue
void displayPendingBookings(struct Queue* q) {
    if (isEmpty(q)) {
        printf("\nQueue is empty. No pending bookings.");
        return;
    }
    printf("\n--- Pending Bookings ---\n");
    int i = q->front;
    while (1) {
        struct Booking booking = q->items[i];
        printf("Ticket #%d for %s (Bus: %d, Seats: %d)\n", booking.ticketNumber, booking.customerName, booking.busNumber, booking.numSeats);
        if (i == q->rear) {
            break;
        }
        i = (i + 1) % MAX_PENDING_BOOKINGS;
    }
    printf("------------------------\n");
}

// Helper function to display bus availability
void displayAvailableBuses() {
    printf("\n--- Available Buses ---\n");
    for (int i = 0; i < MAX_BUSES; i++) {
        printf("Bus %d: %d seats available out of %d\n", busDatabase[i].busNumber, busDatabase[i].availableSeats, busDatabase[i].totalSeats);
    }
    printf("-----------------------\n");
}

// Method for the user to book a ticket
void bookTicket(struct Queue* q) {
    struct Booking newBooking;
    int busNumber, numSeats;
    
    printf("\nEnter your name: ");
    scanf("%99[^\n]", newBooking.customerName);
    scanf("%*c"); // Clear the remaining newline character
    
    displayAvailableBuses();
    
    printf("Enter the bus number you wish to book: ");
    scanf("%d", &busNumber);
    
    // Clear input buffer after reading an integer
    scanf("%*c");
    
    printf("Enter the number of seats: ");
    scanf("%d", &numSeats);
    
    // Clear input buffer after reading an integer
    scanf("%*c");
    
    // Check for seat availability before enqueuing
    int busFound = 0;
    for (int i = 0; i < MAX_BUSES; i++) {
        if (busDatabase[i].busNumber == busNumber) {
            busFound = 1;
            if (busDatabase[i].availableSeats >= numSeats) {
                newBooking.busNumber = busNumber;
                newBooking.numSeats = numSeats;
                newBooking.ticketNumber = ++lastTicketNumber;
                enqueue(q, newBooking);
            } else {
                printf("\nSorry, only %d seats are available on Bus %d.\n", busDatabase[i].availableSeats, busNumber);
            }
            break;
        }
    }
    if (!busFound) {
        printf("\nError: Bus %d not found.\n", busNumber);
    }
}

// Main function to run the bus booking system menu

int main() {
    struct Queue bookingQueue;
    initQueue(&bookingQueue);
    int ch;
    
    do {
        printf("\n\n==============Bus Ticket Booking System =====================\n");
        printf("1. Book a Ticket (User)\n");
        printf("2.Assign Seats(Admin)\n");
        printf("3. View Pending Bookings\n");
        printf("4. View Bus Availability\n");
        printf("5. Exit\n");
        printf("==================================================================\n");
        printf("Enter your choice: ");
        scanf("%d", &ch);
        
        // Clear input buffer after reading the menu choice
        scanf("%*c");

        switch (ch) {
            case 1:
                bookTicket(&bookingQueue);
                break;
            case 2:
                dequeue(&bookingQueue);
                break;
            case 3:
                displayPendingBookings(&bookingQueue);
                break;
            case 4:
                displayAvailableBuses();
                break;
            case 5:
                printf("\nExiting program.\n");
                return 0;
            default:
                printf("\nInvalid choice. Please try again.");
                break;
        }
    } while (1);
    return 0;
}
