#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node *left , *right;
};

struct Node*createNode(int value){
    struct Node* newnode = (struct Node*)malloc(sizeof(struct Node));
    newnode->data = value;
    newnode-> left =  newnode-> right = NULL ;
    return newnode;
}

struct Node* insert(struct  Node* root,int value){
    struct  Node *newnode=createNode(value);
       if(root == NULL)
       return newnode;

       struct Node * parent = NULL , *curr  = root;
       while(curr!= NULL){
        parent = curr;
        if(value<curr->data)
        curr = curr->left;
        else if(value > curr->data)
        curr=curr->right;
        else 
        return root;
       }
       if(value < parent->data)
       parent->left = newnode;
       else
       parent->right = newnode;
       return root;
}

struct Node* search(struct Node*root ,int key){
    struct  Node* curr = root;
    while(curr != NULL){
        if(key == curr->data)
        return curr;
        else if(key < curr->data)
        curr = curr->left;
        else
    curr = curr->right;
    }
    return NULL;
}




int main(){
    struct Node* root = NULL;
    int choice , value ,key;
    while (1)
    {
       printf("\n1.Insert \n2.Inorder Transversal \n3.Search \n4.Exit \n Enter Your Choice:");
       scanf("%d",choice);
       switch (choice)
       {
       case 1:
        printf("Enter value To Insert : ");
        scanf("%d ",&value);
        root = insert(root,value);
        break;

        case 2:
        printf("Enter value To Search : ");
        scanf("%d ",&key);
        if(search(root,key))
        printf("Found !\n");
        else
        printf("Not Found !\n");
        break;

        case 3:
        exit(0);

        default : 
        printf("Invalid Choice !\n");
    
    }
  }
    return 0;  
 }