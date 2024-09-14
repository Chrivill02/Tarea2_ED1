//Christian Villegas - 1592623
export class Node{
    private next: Node | null;
    private previous: Node | null;
    private data: number;

    constructor(){
        this.next = null;
        this.previous = null;
        this.data = Math.floor(Math.random() * 10) + 1

    }


    public getNext(): Node | null {
      return this.next;
    }
    public setNext(value: Node | null) {
      this.next = value;
    }

    public gePrevious(): Node | null {
      return this.previous;
    }
    public setPrevious(value: Node | null) {
      this.previous = value;
    }

    public getData(): number {
      return this.data;
    }
    public setData(value: number) {
      this.data = value;
    }
}