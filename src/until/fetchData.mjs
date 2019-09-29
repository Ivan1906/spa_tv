export const fetchData = async(url) => {
  return await(await fetch(url)).json();
}