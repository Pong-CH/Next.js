
export default function ProfileCardComponent() {
    const image = "https://img.magnific.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-617.jpg?semt=ais_hybrid&w=740&q=80"
    const name = "Sivter"
    const position = "Student"
    const age = "20"
  return (
    <section className="bg-gray-300 w-[280px]">
        <img src={image} alt="" className="h-[280px]"/>
        <h2>{name}</h2>
        <h3>{position}</h3>
        <h4>{age}</h4>
    </section>
  )
}
