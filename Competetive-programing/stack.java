class Node{
    Object data;
    Node next;

    Node(Object data){
        this.data=data;
    }
    Node top=null;

    //push
public void push(Object data)
{
    Node n=new Node(data);
    top.next=n;
    top=n;
    
}
    //pop

public void pop(Object data){
    if(top==null){
        return;
    }
    System.out.println(top.data);
    top=top.next;

}
    //pop

public Object peek(){
    return top.data;
}
}