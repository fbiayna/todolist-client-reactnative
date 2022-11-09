import {Observable} from 'rxjs';
import {injectable} from 'tsyringe';
import firestore from '@react-native-firebase/firestore';
import {ItemRepositoryType} from '../interfaces/repositories/ItemRepositoryType';

@injectable()
export class ItemRepository implements ItemRepositoryType {
  createItem(): Observable<string> {
    return new Observable(subscriber => {
      firestore()
        .collection('items')
        .add({
          createdAt: Date.now(),
        })
        .then(snapshot => {
          subscriber.next(snapshot.id);
          subscriber.complete();
        })
        .catch(error => subscriber.error(error));
    });
  }
}