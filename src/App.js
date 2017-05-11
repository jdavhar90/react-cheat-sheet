import React, { Component } from "react";
import cxs from "cxs";

import { includes } from "lodash";

import data from "./data.js";

import ReactCheatSheet from "./containers/ReactCheatSheet";
import CategoryFilter from "./components/CategoryFilter";
import ReferenceItem from "./components/ReferenceItem";
import SearchInput from "./components/SearchInput";
import NoResults from "./components/NoResults";

class App extends Component {
  render() {
    return (
      <main
        className={cxs({
          fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
          margin: "0 auto",
          maxWidth: "720px",
        })}
      >
        <div className={cxs({ padding: "1rem" })}>
          <h1
            className={cxs({
              marginBottom: "1rem",
              color: "#212529",
              fontWeight: 900,
              fontSize: "2em",
            })}
          >
            React Cheat Sheet{" "}
            <small
              className={cxs({
                color: "#6a7884",
                fontSize: ".5em",
              })}
            >
              v15.5
            </small>
          </h1>

          <ReactCheatSheet data={data}>
            {(
              {
                categories,
                selectedCategories,
                filteredResults,
                handleCategoryChange,
                searchPredicate,
                handleSearchChange,
              }
            ) => (
              <div>
                <SearchInput
                  searchPredicate={searchPredicate}
                  handleSearchChange={handleSearchChange}
                />

                <div>
                  {categories.map((name, i) => (
                    <CategoryFilter
                      active={includes(selectedCategories, name)}
                      key={i}
                      name={name}
                      onToggle={(category, checked) =>
                        handleCategoryChange(category, checked)}
                    />
                  ))}
                </div>

                <section>
                  {filteredResults.length
                    ? filteredResults.map((item, i) => (
                        <ReferenceItem key={i} {...item} />
                      ))
                    : <NoResults />}
                </section>
              </div>
            )}
          </ReactCheatSheet>

          <footer
            className={cxs({
              paddingBottom: "1rem",
              margin: "1rem 0",
            })}
          >
            <a href="https://learnreact.com/courses/function-components" target="_blank" rel="noopener" style={{ display: "flex", lineHeight: "1.25", fontSize: "12px", boxSizing: "border-box", marginTop: "16px", width: "320px", maxWidth: "320px", textDecoration: "none", color: "#222" }}>
              <div style={{ boxSizing: "border-box", border: "1px solid lightgray", overflow: "hidden" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200" width="130px" height="100px" style={{ display: "block" }}>
                  <title>Learn React Ad</title>
                  <g fill="none" fillRule="evenodd">
                    <path fill="#FFF" d="M-12.627 35.646h283.254v148.708H-12.627z"/>
                    <path fill="#000" fillOpacity=".8" d="M26.738 70V43.45h6.45v20.962h10.274V70H26.737zm31.575-11.475c0-.975-.307-1.812-.92-2.512-.612-.7-1.53-1.05-2.755-1.05-.6 0-1.15.093-1.65.28-.5.188-.938.444-1.313.77-.375.325-.675.706-.9 1.143-.225.438-.35.894-.375 1.37h7.913zm5.662 2.363v.75c0 .25-.012.487-.038.712H50.4c.05.525.206 1 .47 1.425.26.425.6.794 1.01 1.106.414.32.876.56 1.39.74.51.18 1.042.26 1.592.26.976 0 1.8-.18 2.475-.54.676-.36 1.225-.83 1.65-1.4l4.276 2.7c-.876 1.28-2.032 2.26-3.47 2.95-1.437.69-3.105 1.03-5.005 1.03-1.4 0-2.725-.22-3.975-.65-1.25-.44-2.344-1.07-3.282-1.91-.93-.83-1.67-1.86-2.21-3.09-.54-1.22-.8-2.62-.8-4.2 0-1.52.26-2.9.79-4.14.53-1.24 1.24-2.29 2.14-3.15.9-.86 1.96-1.53 3.19-2.01 1.23-.47 2.55-.71 3.98-.71 1.38 0 2.64.23 3.79.7 1.15.46 2.14 1.13 2.96 2.01.83.88 1.47 1.94 1.93 3.19.47 1.25.7 2.68.7 4.28zm14.625.974h-.787c-.676 0-1.357.032-2.044.094-.69.063-1.3.18-1.84.356s-.98.432-1.33.77c-.35.337-.53.78-.53 1.33 0 .35.08.65.24.9.16.25.36.45.62.6.25.15.53.257.86.32.32.062.63.093.94.093 1.25 0 2.2-.344 2.87-1.03.66-.69.99-1.62.99-2.795v-.638zm-11.287-7.987c1.1-1.05 2.38-1.837 3.843-2.362 1.463-.526 2.956-.788 4.48-.788 1.577 0 2.908.194 3.995.58 1.09.39 1.97.99 2.65 1.8.68.814 1.17 1.84 1.48 3.076.32 1.24.47 2.71.47 4.41V70H78.6v-1.987h-.112c-.476.775-1.194 1.374-2.157 1.8-.96.425-2 .637-3.13.637-.75 0-1.52-.1-2.32-.3-.8-.2-1.53-.525-2.19-.975-.66-.45-1.2-1.05-1.63-1.8-.42-.75-.64-1.675-.64-2.775 0-1.35.37-2.437 1.11-3.262.74-.826 1.69-1.463 2.85-1.913 1.16-.45 2.46-.75 3.88-.9 1.43-.15 2.82-.225 4.17-.225V58c0-.925-.32-1.606-.97-2.044-.65-.437-1.45-.656-2.4-.656-.87 0-1.71.187-2.53.563-.81.375-1.5.824-2.08 1.35l-3.11-3.338zm33.6 2.475c-.276-.075-.544-.125-.807-.15-.262-.025-.518-.038-.768-.038-.826 0-1.52.15-2.082.45-.562.3-1.012.663-1.35 1.088-.337.425-.58.887-.73 1.387-.15.5-.226.938-.226 1.313V70H88.8V51.325h5.925v2.7h.075c.475-.95 1.15-1.725 2.025-2.325.875-.6 1.887-.9 3.037-.9.25 0 .494.012.732.038.237.025.43.062.58.112l-.262 5.4zm15 13.65V59.8c0-.525-.044-1.025-.132-1.5-.08-.475-.23-.894-.43-1.256-.2-.363-.48-.65-.84-.863-.36-.21-.82-.31-1.37-.31-.55 0-1.03.11-1.44.32-.41.21-.75.51-1.03.88-.27.38-.48.81-.62 1.3s-.2 1-.2 1.52V70h-6.19V51.325h5.97v2.587h.08c.23-.4.52-.793.88-1.18.36-.388.79-.72 1.28-.995s1.02-.5 1.6-.675c.58-.175 1.19-.262 1.84-.262 1.25 0 2.31.225 3.19.675.88.45 1.58 1.03 2.12 1.744.54.71.93 1.53 1.17 2.45.24.92.36 1.85.36 2.77V70h-6.19zm34.762 0l-5.738-10.538h-2.175V70h-6.3V43.45h10.126c1.275 0 2.518.13 3.73.394 1.213.262 2.3.706 3.263 1.33.97.626 1.74 1.45 2.31 2.476.58 1.025.87 2.3.87 3.825 0 1.8-.48 3.312-1.46 4.538-.97 1.225-2.32 2.1-4.05 2.625L158.18 70h-7.5zm-.263-18.413c0-.625-.13-1.13-.393-1.518-.27-.39-.6-.69-1.02-.9-.41-.22-.88-.36-1.39-.44-.52-.08-1.01-.11-1.49-.11h-3.41v6.19h3.03c.52 0 1.06-.05 1.61-.13.55-.09 1.05-.25 1.5-.47.45-.23.82-.55 1.1-.98.29-.43.43-.98.43-1.65zm22.988 6.938c0-.975-.306-1.812-.92-2.512-.61-.7-1.53-1.05-2.755-1.05-.6 0-1.15.093-1.65.28-.5.188-.937.444-1.313.77-.375.325-.674.706-.9 1.143-.225.438-.35.894-.374 1.37h7.912zm5.662 2.363v.75c0 .25-.012.487-.037.712h-13.537c.05.525.206 1 .468 1.425.263.425.6.794 1.013 1.106.41.32.87.56 1.38.74.51.18 1.04.26 1.59.26.97 0 1.8-.18 2.47-.54.67-.36 1.22-.83 1.65-1.4l4.27 2.7c-.88 1.28-2.03 2.26-3.47 2.95-1.44.69-3.11 1.03-5.01 1.03-1.4 0-2.73-.22-3.98-.65-1.25-.44-2.35-1.07-3.28-1.91-.94-.83-1.68-1.86-2.22-3.09-.53-1.22-.8-2.62-.8-4.2 0-1.52.26-2.9.78-4.14.52-1.24 1.24-2.29 2.14-3.15.9-.86 1.96-1.53 3.18-2.01 1.22-.47 2.55-.71 3.97-.71 1.37 0 2.64.23 3.79.7 1.15.46 2.14 1.13 2.96 2.01.83.88 1.47 1.94 1.93 3.19.46 1.25.7 2.68.7 4.28zm14.625.974h-.787c-.675 0-1.356.032-2.044.094-.687.063-1.3.18-1.837.356-.54.176-.99.432-1.34.77-.35.337-.53.78-.53 1.33 0 .35.08.65.24.9.16.25.37.45.62.6.25.15.53.257.86.32.32.062.64.093.94.093 1.25 0 2.2-.344 2.87-1.03.66-.69.99-1.62.99-2.795v-.638zM182.4 53.875c1.1-1.05 2.38-1.837 3.844-2.362 1.462-.526 2.956-.788 4.48-.788 1.576 0 2.907.194 3.995.58 1.08.39 1.96.99 2.64 1.8.67.814 1.17 1.84 1.48 3.076.31 1.24.47 2.71.47 4.41V70h-5.63v-1.987h-.12c-.48.775-1.2 1.374-2.16 1.8-.97.425-2.01.637-3.13.637-.75 0-1.53-.1-2.33-.3-.8-.2-1.53-.525-2.2-.975-.67-.45-1.21-1.05-1.64-1.8-.43-.75-.64-1.675-.64-2.775 0-1.35.37-2.437 1.1-3.262.73-.826 1.68-1.463 2.85-1.913 1.16-.45 2.45-.75 3.88-.9 1.42-.15 2.81-.225 4.16-.225V58c0-.925-.33-1.606-.98-2.044-.65-.437-1.45-.656-2.4-.656-.88 0-1.72.187-2.53.563-.82.375-1.51.824-2.08 1.35l-3.12-3.338zm34.35 3.487c-.35-.45-.825-.812-1.425-1.087-.6-.275-1.212-.413-1.837-.413-.65 0-1.238.132-1.763.394-.525.263-.975.613-1.35 1.05-.375.438-.67.944-.88 1.52-.214.574-.32 1.186-.32 1.837 0 .65.1 1.262.3 1.837.2.575.494 1.08.88 1.52.39.436.85.78 1.39 1.03.536.25 1.142.375 1.817.375.626 0 1.244-.12 1.857-.356.61-.24 1.1-.59 1.48-1.04l3.41 4.16c-.78.75-1.78 1.33-3 1.76-1.23.42-2.53.63-3.9.63-1.48 0-2.85-.23-4.13-.68-1.28-.45-2.38-1.11-3.32-1.97-.94-.86-1.68-1.91-2.22-3.13-.54-1.23-.81-2.61-.81-4.16 0-1.53.27-2.9.8-4.13.54-1.23 1.27-2.27 2.21-3.13.93-.86 2.04-1.53 3.31-1.99 1.27-.47 2.64-.7 4.09-.7.67 0 1.34.06 2 .19.66.12 1.3.29 1.91.5.61.21 1.18.47 1.69.78.51.31.95.65 1.33 1.03l-3.56 4.13zm12.675-1.425v7.126c0 .875.17 1.53.506 1.968.34.44.95.66 1.82.66.3 0 .62-.02.96-.07.34-.05.62-.12.85-.22l.08 4.5c-.42.15-.96.28-1.61.4-.65.12-1.3.17-1.95.17-1.25 0-2.3-.15-3.15-.47-.85-.31-1.53-.76-2.04-1.35-.51-.58-.88-1.28-1.11-2.1-.22-.81-.33-1.71-.33-2.72v-7.88h-3v-4.61h2.96v-4.92h6.04v4.92h4.39v4.62h-4.38z"/>
                    <path fill="#FFDE37" d="M128.528 105.46l30.45 60.9h-60.9"/>
                    <ellipse cx="56.062" cy="136.617" fill="#FF41B4" rx="30.686" ry="30.686"/>
                    <path fill="#19A974" d="M172.432 105.46h61.372v61.37h-61.372z"/>
                  </g>
                </svg>
              </div>

              <div style={{ flex: "1", boxSizing: "border-box", marginLeft: "8px" }}>
                Learn all about <strong>functional components</strong> in a new course by Learn React.
              </div>
            </a>
          </footer>
        </div>
      </main>
    );
  }
}

export default App;
