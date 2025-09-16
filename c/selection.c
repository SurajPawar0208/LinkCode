#include<stdio.h>
int main(){
    int arr[5]={3,2,5,4,1};
    int length=sizeof(arr)/sizeof(arr[0]);
    printf("Unsorted Array:");
    for(int i=0;i<length;i++){
        printf("%d",arr[i]);
    }
    
    for(int i=1;i<length;i++){
        int key=arr[i];
        for(int j=i-1;j>=0&&key<arr[j];j--){
            if(arr[key]<arr[j]){
                key=j;
            }
        }
        int temp=arr[i];
        arr[i]=arr[key];
        arr[key]=temp;

    }
    printf("sorted Array:");
    for(int i=0;i<length;i++){
        printf("%d",arr[i]);
    }
}