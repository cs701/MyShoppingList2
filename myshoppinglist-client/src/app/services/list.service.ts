import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/list';
const uid = localStorage.getItem('uid');

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(baseUrl);
  }

  get() {
    return this.http.get(`${baseUrl}/${uid}`);
  }

  create(data) {
    return this.http.post(`${baseUrl}/ ${uid}/new`, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }



  itemPurchased(id){
    const data=null;
    return this.http.put(`${baseUrl}/${id}/purchased`,data);
  }

  itemChange(id,data){
    return this.http.put(`${baseUrl}/${id}/change`,data);

  }

  itemDeleted(id){
    const data=null;
    return this.http.put(`${baseUrl}/${id}/deleted`,data);
  }
}
