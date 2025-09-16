#include<stdio.h>
int main(){
    int arr[5]={3,2,5,4,1};
    int length=sizeof(arr)/sizeof(arr[0]);
    printf("Unsorted Array:");
    for(int i=0;i<length;i++){
        printf("%d",arr[i]);
    }
    printf("\n");
    for(int i=0;i<length;i++){
        for(int j=0;j<length-1-i;j++){
            if(arr[j]>arr[j+1]){
                int temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    printf("sorted Array:");
    for(int i=0;i<length;i++){
        printf("%d",arr[i]);
    }
}