const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string) {
  // Write your code below
  let word:string[] = comment.split(" ")
  let filtered:string[] = word.filter((word) => word.length>=5 && word.length<=10);
  console.log(filtered)
}
shortenComment(comment)