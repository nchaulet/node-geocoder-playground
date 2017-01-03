export function geocode(address) {
  return fetch(`/api/geocode?address=${encodeURIComponent(address)}`)
    .then(res => res.json());
}


export function reverseGeocode() {

}
