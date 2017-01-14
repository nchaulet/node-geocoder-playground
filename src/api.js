const DEFAULT_PROVIDER = 'google';

export function geocode(address, provider = DEFAULT_PROVIDER) {
  return fetch(`/api/geocode?address=${encodeURIComponent(address)}&provider=${provider}`)
    .then(res => res.json());
}


export function reverseGeocode() {

}
