interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string,
  }
}

const RepositoryItem = (props: RepositoryItemProps) => {
  const {
    name,
    description,
    html_url,
  } = props.repository;
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      <a href={html_url} target="_blank">
        Acessar Repositório
      </a>
    </li>
  )
}

export default RepositoryItem
