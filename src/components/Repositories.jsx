import react from "react";
import RepoCard from "./RepoCard";

export default function repositories({portfolioStars, todoStars, dotfilesStars, handleStarPortfolio, handleStarTodo, handleStarDotfiles}) {
  return (
        <RepoCard 
          portfolioStars={portfolioStars}
          todoStars={todoStars}
          dotfilesStars={dotfilesStars}
          handleStarPortfolio={handleStarPortfolio}
          handleStarTodo={handleStarTodo}
          handleStarDotfiles={handleStarDotfiles}
        />
    ); 
}