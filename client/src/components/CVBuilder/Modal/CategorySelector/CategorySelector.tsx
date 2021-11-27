import React from 'react';

export default function CategorySelector() {

  const categories:string[] = ['certificates','education','languages','skills','work experience'];
  const categoryList = categories
    .map(i => <div className="w-1/5 h-20 bg-primary-bg rounded-full m-3 py-3 text-center" >{i}</div>)


  return (
    <div className="flex flex-row flex-wrap">
      {categoryList}
    </div>
  );
}