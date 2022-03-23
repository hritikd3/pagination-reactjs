const paginate = (followers) => {
  // console.log(followers);
  const itemsPerPage = 12;
  const pages = Math.ceil(followers.length / itemsPerPage);
  // console.log(pages);
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  console.log(newFollowers);
};

export default paginate;
