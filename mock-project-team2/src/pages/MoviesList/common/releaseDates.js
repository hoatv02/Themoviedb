export const headerReleases = [{ disabled: false, description: "Search all releases?" }]

export const headerCountry = [{ disabled: false, description: "Search all countries?" }]

export const contentReleases = [
  { disabled: false, description: "Premiere" },
  { disabled: false, description: "Theatrical (limited)" },
  { disabled: false, description: "Theatrical" },
  { disabled: false, description: "Digital" },
  { disabled: false, description: "TPhysical" },
  { disabled: false, description: "TV" },
]

export const convertToCode = (arr) => {
  const codes = arr.map(function (item) {
    switch (item) {
      case "Premiere":
        return "1"
      case "Theatrical (limited)":
        return "2"
      case "Theatrical":
        return "3"
      case "Digital":
        return "4"
      case "TPhysical":
        return "5"
      case "TV":
        return "6"
      default:
        return ""
    }
  })
  return codes.sort().join("|")
}
