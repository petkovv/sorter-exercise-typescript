import { NumberCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumberCollection([4, 1, 5]);
numbersCollection.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('Ivan');
charactersCollection.sort();
console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(500)
linkedList.add(50)
linkedList.add(10)
linkedList.add(200)
linkedList.add(-500)
linkedList.add(0)
linkedList.sort();
linkedList.print();