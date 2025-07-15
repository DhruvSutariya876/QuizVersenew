#include<iostream>
using namespace std;
int main(){
    
    int arr[] = {1,2,3,5};
    int n=sizeof(arr)/sizeof(arr[0]);
    int n1,n2;
    int arr1[n];
    for(int i=0;i<n;i++){
        n1+=arr[i];
    }

    int sum=(n+1)*(n+2)/2;
   
    cout<<"Missing element "<<sum-n1;

}