export default function FooterSpecialties({ title, items }) {
  return (
    <div>
      <h3 className="type-title-s weight-semibold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="type-body-m text-text-secondary">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
