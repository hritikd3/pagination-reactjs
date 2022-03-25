const paginate = (followers) => {
  // console.log(followers);
<<<<<<< CodeSandbox
  const itemsPerPage=9
};

export default paginate;

=======
  const itemsPerPage = 10;
  const pages = Math.ceil(followers.length / itemsPerPage);
  // console.log(pages);
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
>>>>>>> GitHub
    console.log(start);
    return followers.slice(start, start + itemsPerPage);
  });
  // console.log(newFollowers);
  return newFollowers;
};

export default paginate;
