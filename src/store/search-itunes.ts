const SearchITunes = (url: string) => {
  let tunes: [] = [];
  const getInfo = async (dispatch: any) => {
    const res = await fetch(url);
    tunes = await res.json();
    return dispatch({
      type: "UPDATE",
      payload: tunes
    });
  };

  return (dispatch: any) => getInfo(dispatch);
};

export default SearchITunes;
