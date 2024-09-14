import { Node } from "./Node";
export class List{
    private size: number;
    private head: Node | null;
    private tail: Node | null;

    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    public append(newNode: Node): void {

        if (this.head == null && this.tail == null) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.setPrevious(this.tail);
          this.tail?.setNext(newNode);
          this.tail = newNode;
        }
        this.size++;
      }

      public show(): void {
        let current = this.head;
        while (current) {
            if (current.getData() % 2 == 0){
                console.log(current.getData());
                
            }
            current = current.getNext();   
        }
    }
}
