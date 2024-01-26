import { defineStore } from 'pinia';
import { collection, query, getDocs, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useTrelloStore = defineStore({
  id: 'trello',
    state: () => {
      return {      
        columns: [],
        columnas: []
      }
  },
  getters: {

  },
  actions: {
    // Añadir datos
    async addArray() {
      const docData = { data: this.columns};
      await setDoc(doc(db, "agenda", "columns"), docData);
    },
    // Añadir dato
    async addItem(title) {
    const docRef = await setDoc(doc(db, "agenda", "Columns"), 
    {
      title: title,
     
      });
    },
    // Actualizar dato
    async updateItem() {   
      const columnRef = doc(db, 'columns', '4' );
      await updateDoc(columnRef, 
        { tasks: [
          {
          id: "1",
          title: "Tarea 2 Columna 4",
          createdAt: "20/12/2023"
          },
          {
          id: "2",
          title: "Tarea 2 Columna 4",
          createdAt: "20/12/2023"
          },
          {
          id: "3",
          title: "Tarea 3 Columna 4",
          createdAt: "20/12/2023"
          }
      ]
    });
      },
      // Obtener datos
    async getItems () {
      const column = query(collection(db, "agenda"));
      this.columns = [];
      const queryColumnSnapshot = await getDocs(column);
      queryColumnSnapshot.forEach((doc) => {
        let item = doc.data();
        item.id = doc.id;
        this.columnas.push(item);
        console.log("Columnas: ", this.columnas);
      });  
      // Filtar datos    
      this.columns = this.columnas[0].data;
      console.log("Columns: ", this.columns);
    },
 
  }
});
