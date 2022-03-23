const paginate = (followers) => {
  // console.log(followers);
  const itemsPerPage = 12;
  const pages = Math.ceil(followers.length / itemsPerPage);
  console.log(pages);
};

export default paginate;
