import React, {useState, useEffect} from "react";
import NavigationBar from "../components/NavigationBar";
import { TextField, Stack, Autocomplete } from "@mui/material";
import Categories from "../components/Documentation/Categories";
import DocumentCard from "../components/Documentation/DocumentCard";

interface Document {
  id: number;
  title: string;
  description: string;
  category: number[];
  link: string;
}

interface Documents {
  documents: Document[];
}


export const Documentation = () => {
  
  const PressCenterCategory = ["All", "Success Story", "Company News"]

  const SortByOptions = [
    { label: "newest", value: 0 },
    {
      label: "latest",
      value: 1,
    },
  ];

  const [items, setItems] = useState([]);

  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://62c3fa7eabea8c085a67f486.mockapi.io/press-center?category=" +
        categoryId
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId]);

  const testDocs: Documents = {
    documents: [
    {
      id: 1,
      title: "Test Doc",
      description: "Test News Text",
      category: [0, 1],
      link: "",
    },
    {
      id: 2,
      title: "Test Doc",
      description: "Test News Text",
      category: [0, 2],
      link: "",
    }
  ]};
  

  return (
  <>
      <NavigationBar theme={"a header__link-black"} />
      <section className="sc-network">
        <div className="grid">
          <div>
            
            <Stack spacing={2} sx={{width:'100%'}} className="sc-press-center__page__search-bar">
              <Autocomplete
                options={testDocs.documents.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField {...params} label="Search" />
                )}
              />
            </Stack>
          </div>
          <div className="sc-press-center__page__categories">
            <Categories
              categories={PressCenterCategory}
              category={categoryId}
              onClickCategory={(i: number) => setCategoryId(i)}
            />
          </div>
          <div className="sc-press-center__page__grid">
            {testDocs.documents.map((doc: Document) => (
              <div key={doc.id} style={{marginTop: "50px"}}> 
              <DocumentCard
              
              title={doc.title}
              description={doc.description}
              link={doc.link}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Documentation;
