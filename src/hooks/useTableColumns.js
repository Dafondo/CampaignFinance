import { useMemo } from 'react'

export const useTableColumns = () => {
  const contributorColumns = useMemo(
    () => [
      {
        Header: 'Contributor Name',
        accessor: 'name',
      },
      {
        Header: 'City/State',
        accessor: ({ city, state }) => city + ', ' + state,
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Profession',
        accessor: 'profession',
      },
      {
        Header: 'Total Contributions',
        accessor: 'total',
      },
    ],
    []
  )

  const candidateColumns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'candidate_full_name',
      },
      {
        Header: 'Party',
        accessor: 'party',
      },
      {
        Header: 'Contest',
        accessor: ({ office, juris }) =>
          juris ? `${office} ${juris}` : office,
      },
    ],
    []
  )

  const candidateContributionColumns = useMemo(
    () => [
      {
        Header: 'Contributor Name',
        accessor: 'name',
      },
      {
        Header: 'Contributor Type',
        accessor: 'transaction_type',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Contribution Type',
        accessor: 'form_of_payment',
      },
      {
        Header: 'Contribution Date',
        accessor: 'date_occurred',
      },
      {
        Header: 'Description',
        accessor: 'purpose',
      },
    ],
    []
  )

  return {
    contributorColumns,
    candidateColumns,
    candidateContributionColumns,
  }
}
