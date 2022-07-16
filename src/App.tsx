import { Component, createSignal, Index, startTransition } from "solid-js";
import classes from "./App.module.css";
import { Item } from "./components/Item";
import { SearchBox } from "./components/SearchBox";
import { itemMap } from "./data/items";

const App: Component = () => {
  const [input, setInput] = createSignal("");
  const [searchQuery, setSearchQuery] = createSignal("");

  const onChange = (input: string) => {
    setInput(input);
    startTransition(() => {
      setSearchQuery(input.toLowerCase());
    });
  };

  return (
    <>
      <div class={classes.pokemonList}>
        <Index each={Array.from(itemMap.keys())}>
          {(id) => <Item id={id()} searchQuery={searchQuery()} />}
        </Index>
      </div>
      <footer class={classes.footer}>
        <p>
          Data is obtained from{" "}
          <a href="https://pokeapi.co/" rel="external">
            PokéAPI
          </a>
          .
        </p>
      </footer>
      <div class={classes.searchBox}>
        <SearchBox input={input()} onChange={onChange} />
      </div>
    </>
  );
};

export default App;
