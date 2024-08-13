/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export default function ExpenseFilter({ onSelectedCatagory }) {
  return (
    <div>
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => {
          onSelectedCatagory(e.target.value)
        }}
      >
        <option value={""}>ALL</option>
        <option value={'tour'}>tour</option>
        <option value={'utility bill'}>utility bill</option>
        <option value={'personal expense'}>personal expense</option>
      </select>
    </div>
  );
}
