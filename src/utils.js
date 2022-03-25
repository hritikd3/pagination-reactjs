const paginate = (followers) => {
  // console.log(followers);
  const itemsPerPage = 11;
  const pages = Math.ceil(followers.length / itemsPerPage);
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    console.log(start);
    return followers.slice(start, start + itemsPerPage);
  });
  // console.log(newFollowers);
  return newFollowers;
};

export default paginate;
