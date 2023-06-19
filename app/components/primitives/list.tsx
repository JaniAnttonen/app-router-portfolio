type ListProps = {
  children?: React.ReactNode,
  key?: string
}

export const List = ({children}: ListProps) => <ul className="grid grid-flow-row grid-cols-card gap-3">{children}</ul>

export const ListItem = ({children, key}: ListProps) => <li className="flex flex-col shrink-0 gap-1 min-w-card" key={key}>{children}</li>
