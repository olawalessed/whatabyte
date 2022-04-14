import useParentCategoryList from "helper/hooks/useQuery/useParentCategory";
import Category from "./Category";

export default function HomeFeed() {
  // fetch data
  const { data, isLoading, isError, error } = useParentCategoryList();

  if (isError) {
    console.log("Error");
  }

  if (isLoading) {
    console.log("Loading");
  }

  console.log(data);

  const categoryDetails =
    data !== undefined && data.data.parentCategoryCollection;

  // console logs
  console.log(categoryDetails);

  return (
    <div>
      {isLoading ? (
        <h4>Loading</h4>
      ) : (
        <>
          {categoryDetails.items.map((item, i) => (
            <Category
              loading={isLoading}
              title={item.categoryName}
              kitchens={item.listOfKitchenCollection}
            />
          ))}
        </>
      )}
    </div>
  );
}
