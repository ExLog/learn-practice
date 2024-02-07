#include <stdio.h>
#include <stdlib.h>

struct Node {
  int data;
  struct Node *next;
};

void add_node_at_last(int data, struct Node **head) {
  struct Node *new_node = malloc(sizeof(struct Node));
  new_node->data = data;
  new_node->next = NULL;

  if (*head == NULL) {
    *head = new_node;
  } else {
    struct Node *current_node = *head;
    while (current_node->next != NULL) {
      current_node = current_node->next;
    }

    current_node->next = new_node;
  }
}

void add_node_at_first(int data, struct Node **head) {
  struct Node *new_node = malloc(sizeof(struct Node));
  new_node->data = data;
  new_node->next = *head;

  *head = new_node;
}

void print_linked_list(struct Node *head) {
  struct Node *current_node = head;

  while (current_node != NULL) {
    printf("%d -> ", current_node->data);
    current_node = current_node->next;
  }
  printf("NULL\n");
}

int main() {
  struct Node *head = NULL;

  add_node_at_last(1, &head);
  add_node_at_last(2, &head);
  add_node_at_last(3, &head);
  add_node_at_last(4, &head);
  add_node_at_last(5, &head);
  add_node_at_last(6, &head);

  add_node_at_first(69, &head);

  print_linked_list(head);
}
