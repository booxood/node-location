/*
{
  Location: {
    CountryRegion: [
      {
        '$': { Name: '', Code: 1 },
        State: [
          {
            '$': { Name: '', Code: 2 },
            City: [
              {
                $: { Name: '', Code: 3}
              }
            ]
          }
        ]
      },
      {

      },
      ...
    ]
  }
}
********* convert to *********
[
  {
    name: '',
    code: '',
    country: '',
    state: '',
    city: '',
    region: '',
    level: 4
  },
  ...
]
*/
exports.convert = (result) => {
  let rows = []
  for (let c of result.Location.CountryRegion) {
    if (c['$'] && c['$'].Name) {
      rows.push({
        name: c['$'].Name,
        code: c['$'].Code,
        country: c['$'].Name,
        level: 1,
      })
    }

    if (!c.State) continue
    for (let s of c.State) {
      if (s['$'] && s['$'].Name) {
        rows.push({
          name: s['$'].Name,
          code: s['$'].Code,
          country: c['$'].Name,
          state: s['$'].Name,
          level: 2,
        })
      }

      if (!s.City) continue
      for (let ci of s.City) {
        if (ci['$'] && ci['$'].Name) {
          rows.push({
            name: ci['$'].Name,
            code: ci['$'].Code,
            country: c['$'].Name,
            state: s['$'] && s['$'].Name,
            city: ci['$'].Name,
            level: 3,
          })
        }

        if (!ci.Region) continue
        for (let r of ci.Region) {
          if (r['$'] && r['$'].Name) {
            rows.push({
              name: r['$'].Name,
              code: r['$'].Code,
              country: c['$'].Name,
              state: s['$'] && s['$'].Name,
              city: ci['$'].Name,
              region: r['$'].Name,
              level: 4,
            })
          }
        }
      }
    }
  }
  return rows
}
