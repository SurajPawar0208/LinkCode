#include <stdio.h>
#include <string.h>

#define MAX_BUSES 3
#define MAX_BOOKINGS 10
#define MAX_QUEUE 5

struct Bus {
    int busNumber;
    int totalSeats;
    int availableSeats;
};

struct Booking {
    int ticketNumber;
    char customerName[20];
    int busNumber;
    int numSeats;
};

struct Bus buses[MAX_BUSES] = {
    {101, 40, 40},
    {102, 40, 40},
    {103, 40, 40}
};

struct Booking bookings[MAX_BOOKINGS];
int bookingCount = 0;
int lastTicket = 0;

struct Booking queue[MAX_QUEUE];
int front = -1, rear = -1;

int isQueueEmpty() {
    return (front == -1);
}

int isQueueFull() {
    return ((rear + 1) % MAX_QUEUE == front);
}

void enqueue(struct Booking b) {
    if (isQueueFull()) {
        printf("\nQueue is full!\n");
        return;
    }
    if (front == -1) front = 0;
    rear = (rear + 1) % MAX_QUEUE;
    queue[rear] = b;
    printf("\nBooking request added to the  queue.\n");
}

struct Booking dequeue() {
    struct Booking temp;
    strcpy(temp.customerName, "");
    temp.busNumber = -1;
    temp.numSeats = 0;
    temp.ticketNumber = -1;

    if (isQueueEmpty()) {
        printf("\nQueue is empty!\n");
        return temp;
    }

    temp = queue[front];
    if (front == rear) {
        front = rear = -1;
    } else {
        front = (front + 1) % MAX_QUEUE;
    }
    return temp;
}

void showBuses() {
    printf("\n--- Bus Availability ---\n");
    for (int i = 0; i < MAX_BUSES; i++) {
        printf("Bus %d  Available Seats: %d / %d\n",
               buses[i].busNumber,
               buses[i].availableSeats,
               buses[i].totalSeats);
    }
    printf("-------------------------\n");
}

void bookTicket() {
    struct Booking newBooking;
    printf("\nEnter your name: ");
    fgets(newBooking.customerName, sizeof(newBooking.customerName), stdin);
    newBooking.customerName[strcspn(newBooking.customerName, "\n")] = '\0';

    showBuses();

    printf("Enter Bus Number: ");
    scanf("%d", &newBooking.busNumber);

    printf("Enter Number of Seats: ");
    scanf("%d", &newBooking.numSeats);
    getchar();

    enqueue(newBooking);  
}

void processQueue() {
    if (isQueueEmpty()) {
        printf("\nNo pending bookings to process.\n");
        return;
    }

    printf("\nProcessing booking requests...\n");
    while (!isQueueEmpty() && bookingCount < MAX_BOOKINGS) {
        struct Booking req = dequeue();
        int found = 0;
        for (int i = 0; i < MAX_BUSES; i++) {
            if (buses[i].busNumber == req.busNumber) {
                found = 1;
                if (buses[i].availableSeats >= req.numSeats) {
                    buses[i].availableSeats -= req.numSeats;
                    req.ticketNumber = ++lastTicket;
                    bookings[bookingCount++] = req;
                    printf(" Booking successful for %s (Ticket #%d)\n",
                           req.customerName, req.ticketNumber);
                } else {
                    printf(" Not enough seats for %s on Bus %d.\n",
                           req.customerName, req.busNumber);
                }
                break;
            }
        }
        if (!found) {
            printf("Bus %d not found for %s.\n", req.busNumber, req.customerName);
        }
    }
}

void showBookings() {
    if (bookingCount == 0) {
        printf("\nNo bookings yet.\n");
        return;
    }

    printf("\n--- All Bookings ---\n");
    for (int i = 0; i < bookingCount; i++) {
        printf("Ticket #%d | Name: %s | Bus: %d | Seats: %d\n",
               bookings[i].ticketNumber,
               bookings[i].customerName,
               bookings[i].busNumber,
               bookings[i].numSeats);
    }
    printf("---------------------\n");
}

int main() {
    int choice;

    while (1) {
        printf("\n==== Simple Bus Ticket System ====\n");
        printf("1. Add Booking \n");
        printf("2. Process Booking Queue\n");
        printf("3. Show All Bookings\n");
        printf("4. Show Bus Availability\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        getchar();

        switch (choice) {
            case 1:
                bookTicket();
                break;
            case 2:
                processQueue();
                break;
            case 3:
                showBookings();
                break;
            case 4:
                showBuses();
                break;
            case 5:
                printf("\nThank you!\n");
                return 0;
            default:
                printf("\nInvalid choice.\n");
        }
    }
    return 0;
}
