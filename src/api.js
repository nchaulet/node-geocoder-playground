export function geocode(address) {
  return fetch(`http://localhost:4000/geocode?address=${encodeURIComponent(address)}`)
    .then(res => res.json());
}


export function reverseGeocode() {

}
