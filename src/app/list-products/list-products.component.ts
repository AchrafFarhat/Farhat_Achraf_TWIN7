import { Component } from '@angular/core';
import { Products } from '../models/products';
import { shortList } from '../models/shortList';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

  listProducts : Products[]=[
    {"id":1,"title":"Cuisinière","image":"assets/images/grand_electromenagers/cuisiniere.png", "description":"699 dt", "promotion":false, "quantity":50, "categoryId":1},
    {"id":2,"title":"Réfrigérateur","image":"assets/images/grand_electromenagers/refrigerateur.jpg", "description":"1500 dt", "promotion":false, "quantity":20, "categoryId":1},
    {"id":3,"title":"RobotPétrin","image":"assets/images/petit_electromenager/robot_petrin.jpg", "description":"430 dt", "promotion":false, "quantity":150, "categoryId":2},
    {"id":4,"title":"Fer à repasser", "image":"assets/images/petit_electromenager/fer_a_repasser.jpg", "description":"130 dt", "promotion":false, "quantity":100, "categoryId":2},
    {"id":5,"title":"Oppo","image":"assets/images/smart_phones/Oppo.jpg", "description":"920 dt", "promotion":false, "quantity":10, "categoryId":4},
    {"id":6,"title":"TV Téléfunkun", "image":"assets/images/tv_images_son/tv1.jpg", "description":"845 dt", "promotion":false, "quantity":50, "categoryId":5},
    ]
    
    shortList: shortList[] = [];

    handleAddToShortlist(categoryId: number) {
      const idUser = 1; // valeur de votre choix
      if (!this.shortList.find(item => item.idElement === categoryId && item.idUser === idUser)) {
        const newItem = { id: Date.now(), idUser, idElement: categoryId, typeElement: 'category' };
        this.shortList.push(newItem);
        console.log("Added to shortlist:", newItem);
      } else {
        console.log("Item already in shortlist for this user.");
      }
    }
}
