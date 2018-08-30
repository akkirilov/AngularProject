import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APP_KEY, APP_SECRET, API_URL } from '../constants/api.constants';

import { HotelModel } from '../models/hotel';

@Injectable({
    providedIn: 'root'
})
export class HotelsService {
    private hotelsUrl : string = `${API_URL}appdata/${APP_KEY}/hotels`;
    private sortThreeByRaitingUrl : string = `${this.hotelsUrl}?query={}&sort={"raiting": -1}&limit=3`;

    constructor(private http : HttpClient) {  }
    
    getTopThree() : Observable<HotelModel[]> {
        return this.http.get<HotelModel[]>(this.sortThreeByRaitingUrl);
    }
    
    getAll() : Observable<HotelModel[]> {
        return this.http.get<HotelModel[]>(this.hotelsUrl);
    }
    
    getAllByUserId(userId : string) : Observable<HotelModel[]> {
        return this.http.get<HotelModel[]>(`${this.hotelsUrl}?query={"_acl":{"creator":"${userId}"}}`);
    }
    
    getById(id : string) : Observable<HotelModel> {
        return this.http.get<HotelModel>(`${this.hotelsUrl}/${id}`);
    }
    
    addHotel(hotelData : HotelModel) {
        return this.http.post<HotelModel>(`${this.hotelsUrl}`, hotelData);
    }
    
    delete(id : string) {
        return this.http.delete<HotelModel>(`${this.hotelsUrl}/${id}`);
    }
    
    edit(hotelData : HotelModel) {
        return this.http.put<HotelModel>(`${this.hotelsUrl}/${hotelData._id}`, hotelData);
    }
    
}

