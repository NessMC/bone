export interface Node {
  type?: string,
  raw?: string,
  value?: null | string,
  id?: number,
  depth?: number,
  children: Array<Node | undefined>,
}
