import {User} from './user.model';
import {Artist} from './artist.model';
import DateTimeFormat = Intl.DateTimeFormat;
import {Time} from '@angular/common';


export class Festival {
  id: number;
  festivalName: string;
  available: boolean;
  place: string;
  festInfo: string;
  festDate: Date;
  festTime: string;
  cost: number;
  festPhoto: string;
  genres: Array<string>;
  participants: Array<User>;
  artists: Array<Artist>;
  artistsIdList: Array<number>;
}
