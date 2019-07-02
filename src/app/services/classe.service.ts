import { Utils } from '../helpers/utils';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(public httpClient: HttpClient) { }

  listar(subGrupoId: number): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${Utils.urlService}/menu/item/${subGrupoId}`)
        .subscribe((result: any) => {
          resolve(result);
        },
          (error) => {
            reject(error);
          });
    });
  }
}