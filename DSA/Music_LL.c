#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// A node representing a song
struct Song {
    char name[100];
    struct Song* next;
}* head = NULL,* current = NULL;

// Add song to end of playlist
void addSong(char name[]) {
    struct Song* newSong = (struct Song*)malloc(sizeof(struct Song));
    strcpy(newSong->name, name);
    newSong->next = NULL;
    if (head == NULL) {
        head = newSong;
        current = head;
    } else {
        struct Song* temp = head;
        while (temp->next != NULL)
            temp = temp->next;
        temp->next = newSong;
    }
}

// Play next song
void playNext() {
    if (current != NULL && current->next != NULL) {
        current = current->next;
        printf("Playing: %s\n", current->name);
    } else {
        printf("No next song available.\n");
    }
}

// Play current song
void playCurrent() {
    if (current != NULL) {
        printf("Playing: %s\n", current->name);
    } else {
        printf("No song selected.\n");
    }
}

// Display all songs
void displayPlaylist() {
    struct Song* temp = head;
    printf("Playlist:\n");
    while (temp != NULL) {
        printf(" - %s\n", temp->name);
        temp = temp->next;
    }
}

int main() {
    addSong("Song A");
    addSong("Song B");
    addSong("Song C");
    playCurrent();
    playNext();
    playNext();
    displayPlaylist();
    return 0;
}
