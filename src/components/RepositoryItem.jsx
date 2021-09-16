const RepositoryItem = ({ repository }) => {
  const {
    name,
    description,
    link,
  } = repository ?? {};
  return (
    <li>
      <strong>{name ?? 'Default'}</strong>
      <p>{description ?? 'Desc'}</p>

      <a href={link ?? '#'}>
        Acessar Repositório
      </a>
    </li>
  )
}

export default RepositoryItem
