// circularLinkedlist.c
// Simple circular singly linked list demo: append, delete, print, and cleanup
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
	int data;
	struct Node *next;
} Node;

Node* create_node(int value) {
	Node *n = (Node*)malloc(sizeof(Node));
	if (!n) {
		perror("malloc");
		exit(EXIT_FAILURE);
	}
	n->data = value;
	n->next = n; // circular by default
	return n;
}

// Append after tail; if head==NULL, new node becomes head (tail returned)
Node* append(Node *tail, int value) {
	Node *n = create_node(value);
	if (!tail) return n;
	n->next = tail->next;
	tail->next = n;
	return n;
}

// Print list starting from head (tail->next) if tail provided
void print_circular(const Node *tail) {
	if (!tail) {
		printf("<empty>\n");
		return;
	}
	const Node *start = tail->next;
	const Node *cur = start;
	do {
		printf("%d", cur->data);
		cur = cur->next;
		if (cur != start) printf(" -> ");
	} while (cur != start);
	printf("\n");
}

// Delete first node with matching value, returns new tail (may change)
Node* delete_value(Node *tail, int value) {
	if (!tail) return NULL;
	Node *prev = tail;
	Node *cur = tail->next;
	Node *start = cur;
	do {
		if (cur->data == value) {
			if (cur == prev) {
				// single node
				free(cur);
				return NULL;
			}
			prev->next = cur->next;
			if (cur == tail) tail = prev;
			free(cur);
			return tail;
		}
		prev = cur;
		cur = cur->next;
	} while (cur != start);
	return tail; // not found
}

// Free entire circular list
void free_circular(Node *tail) {
	if (!tail) return;
	Node *start = tail->next;
	Node *cur = start->next;
	while (cur != start) {
		Node *tmp = cur;
		cur = cur->next;
		free(tmp);
	}
	free(start);
}

int main(void) {
	Node *tail = NULL;

	// Append 10,20,30
	tail = append(tail, 10);
	tail = append(tail, 20);
	tail = append(tail, 30);

	printf("Circular list: ");
	print_circular(tail);

	tail = delete_value(tail, 20);
	printf("After deleting 20: ");
	print_circular(tail);

	tail = delete_value(tail, 10);
	printf("After deleting 10: ");
	print_circular(tail);

	tail = delete_value(tail, 30);
	printf("After deleting 30 (should be empty): ");
	print_circular(tail);

	free_circular(tail);
	return 0;
}

