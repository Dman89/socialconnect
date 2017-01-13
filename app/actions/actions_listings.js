import axios from 'axios';
import * as Router from 'react-router';
import {FETCH_LISTINGS} from './types';
const PORT = process.env.PORT || 3000;
const ROOT_URL = process.env.ROOT_URL || "http://localhost:"+PORT;

export function fetchListings() {
  let url = ROOT_URL + "/api/listings";
  let request = axios.get(url);
  return {
    type: FETCH_LISTINGS,
    payload: request
  }
}
