#include <stdio.h>
#include <string.h>


#define MAX_BUSES 3
#define MAX_BOOKINGS 20
#define MAX_QUEUE 10
#define MAX_SEATS 40

struct Bus {
    int busNumber;
    int totalSeats;
    int availableSeats;
    int seats[MAX_SEATS]; 
};

struct Booking {
    int ticketNumber;
    char customerName[20];
    int busNumber;
    int numSeats;
    int seatNumbers[MAX_SEATS];
};

struct Bus buses[MAX_BUSES] = {
    {101, 40, 40, {0}},
    {102, 40, 40, {0}},
    {103, 40, 40, {0}}
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
        printf("\n Queue is full! Cannot add more booking requests.\n");
        return;
    }
    if (front == -1) front = 0;
    rear = (rear + 1) % MAX_QUEUE;
    queue[rear] = b;
    printf("\nBooking request added to the queue.\n");
}

struct Booking dequeue() {
    struct Booking temp;
    strcpy(temp.customerName, "");
    temp.busNumber = -1;
    temp.numSeats = 0;
    temp.ticketNumber = -1;

    if (isQueueEmpty()) return temp;
    temp = queue[front];
    if (front == rear) front = rear = -1;
    else front = (front + 1) % MAX_QUEUE;
    return temp;
}

void showBusSeats(struct Bus bus) {
    printf("\n--- Seat Map for Bus %d ---\n", bus.busNumber);
    for (int i = 0; i < MAX_SEATS; i++) {
        if (bus.seats[i] == 0)
            printf("[%2d] ", i + 1);
        else
            printf("[XX] ");
        if ((i + 1) % 10 == 0) printf("\n");
    }
    printf("---------------------------\n");
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


void processQueue() {
    while (!isQueueEmpty() && bookingCount < MAX_BOOKINGS) {
        struct Booking req = dequeue();
        int found = 0;

        for (int i = 0; i < MAX_BUSES; i++) {
            if (buses[i].busNumber == req.busNumber) {
                found = 1;

                int canBook = 1;
                for (int j = 0; j < req.numSeats; j++) {
                    int seatIndex = req.seatNumbers[j] - 1;
                    if (seatIndex < 0 || seatIndex >= MAX_SEATS || buses[i].seats[seatIndex] == 1) {
                        canBook = 0;
                        break;
                    }
                }

                if (canBook) {
                    for (int j = 0; j < req.numSeats; j++)
                        buses[i].seats[req.seatNumbers[j] - 1] = 1;
                    buses[i].availableSeats -= req.numSeats;
                    req.ticketNumber = ++lastTicket;
                    bookings[bookingCount++] = req;

                    printf("\n Booking successful for %s (Ticket #%d)\n", req.customerName, req.ticketNumber);
                    printf(" Assigned seats: ");
                    for (int j = 0; j < req.numSeats; j++)
                        printf("%d ", req.seatNumbers[j]);
                    printf("\n");
                } else {
                    printf(" Some seats already booked. Booking failed for %s.\n", req.customerName);
                }
                break;
            }
        }
        if (!found)
            printf(" Bus %d not found for %s.\n", req.busNumber, req.customerName);
    }
}


void bookTicket() {
    struct Booking newBooking;
    printf("\nEnter your name: ");
    fgets(newBooking.customerName, sizeof(newBooking.customerName), stdin);
    newBooking.customerName[strcspn(newBooking.customerName, "\n")] = '\0';

    showBuses();

    printf("Enter Bus Number: ");
    scanf("%d", &newBooking.busNumber);

    int busIndex = -1;
    for (int i = 0; i < MAX_BUSES; i++) {
        if (buses[i].busNumber == newBooking.busNumber) {
            busIndex = i;
            break;
        }
    }

    if (busIndex == -1) {
        printf("\n Invalid bus number.\n");
        getchar();
        return;
    }

    showBusSeats(buses[busIndex]);

    printf("Enter number of seats you want to book: ");
    scanf("%d", &newBooking.numSeats);

    if (newBooking.numSeats <= 0) {
        printf("\n Invalid number of seats! Must be positive.\n");
        getchar();
        return;
    }
    if (newBooking.numSeats > buses[busIndex].availableSeats) {
        printf("\nNot enough seats available.\n");
        getchar();
        return;
    }

    printf("\nEnter the seat numbers one by one:\n");
    int chosenSeats = 0;
    while (chosenSeats < newBooking.numSeats) {
        int seatNum;
        printf("Seat %d of %d: ", chosenSeats + 1, newBooking.numSeats);
        scanf("%d", &seatNum);

        if (seatNum <= 0 || seatNum > MAX_SEATS) {
            printf("Invalid seat number. Choose between 1 and %d.\n", MAX_SEATS);
            continue;
        }

        if (buses[busIndex].seats[seatNum - 1] == 1) {
            printf(" Seat %d is already taken. Please choose another.\n", seatNum);
            continue;
        }

        int duplicate = 0;
        for (int i = 0; i < chosenSeats; i++) {
            if (newBooking.seatNumbers[i] == seatNum) {
                duplicate = 1;
                break;
            }
        }
        if (duplicate) {
            printf("You already selected seat %d. Choose a different one.\n", seatNum);
            continue;
        }

        newBooking.seatNumbers[chosenSeats++] = seatNum;
    }

    getchar(); // clear buffer

    enqueue(newBooking);
    printf("\nUser added to queue and seats assigned for processing...\n");
    processQueue();
}

// === Display All Bookings ===
void showBookings() {
    if (bookingCount == 0) {
        printf("\nNo bookings yet.\n");
        return;
    }

    printf("\n--- All Bookings ---\n");
    for (int i = 0; i < bookingCount; i++) {
        printf("Ticket #%d | Name: %s | Bus: %d | Seats: ",
               bookings[i].ticketNumber,
               bookings[i].customerName,
               bookings[i].busNumber);
        for (int j = 0; j < bookings[i].numSeats; j++)
            printf("%d ", bookings[i].seatNumbers[j]);
        printf("\n");
    }
    printf("---------------------\n");
}

void cancelBooking() {
    if (bookingCount == 0) {
        printf("\nNo bookings to cancel.\n");
        return;
    }

    int ticketNum;
    printf("\nEnter Ticket Number to Cancel: ");
    scanf("%d", &ticketNum);
    getchar();

    int found = 0;
    for (int i = 0; i < bookingCount; i++) {
        if (bookings[i].ticketNumber == ticketNum) {
            found = 1;
            printf("Booking found for %s (Bus %d)\n", bookings[i].customerName, bookings[i].busNumber);

            printf("Enter number of seats to cancel: ");
            int cancelCount;
            scanf("%d", &cancelCount);

            if (cancelCount <= 0) {
                printf("\nInvalid number of seats to cancel!\n");
                getchar();
                return;
            }

            int cancelSeats[cancelCount];
            printf("Enter seat numbers to cancel: ");
            for (int j = 0; j < cancelCount; j++) 
            scanf("%d", &cancelSeats[j]);
            getchar();

            for (int j = 0; j < MAX_BUSES; j++) {
                if (buses[j].busNumber == bookings[i].busNumber) {
                    for (int k = 0; k < cancelCount; k++) {
                        int seatNum = cancelSeats[k];
                        int seatFound = 0;

                      
                        for (int m = 0; m < bookings[i].numSeats; m++) {
                            if (bookings[i].seatNumbers[m] == seatNum) {
                                seatFound = 1;
                                break;
                            }
                        }

                        if (!seatFound) {
                            printf(" Seat %d not found in your data.\n", seatNum);
                            continue;
                        }

                        if (seatNum > 0 && seatNum <= MAX_SEATS && buses[j].seats[seatNum - 1] == 1) {
                            buses[j].seats[seatNum - 1] = 0;
                            buses[j].availableSeats++;
                            printf(" Seat %d cancelled.\n", seatNum);
                        }
                    }
                    break;
                }
            }
            break;
        }
    }
    if (!found) printf("\nTicket #%d not found.\n", ticketNum);
}

int main() {
    int choice;
    while (1) {
        printf("\n====  Simple Bus Ticket System ====\n");
        printf("1. Add Booking\n");
        printf("2. Show All Bookings\n");
        printf("3. Cancel Booking\n");
        printf("4. Show Bus Availability\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        getchar();

        switch (choice) {
            case 1: bookTicket(); 
            break;
            case 2: showBookings();
            break;
            case 3: cancelBooking();
            break;
            case 4: showBuses();
            break;
            case 5: printf("\nThank you!\n");
            return 0;
            default: printf("\nInvalid choice.\n");
        }
    }
}
