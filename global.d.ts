declare global  {
  type Breeds = {
    data: {
        id: string,
        type: string,
        attributes: {
        name: string,
          description: string,
          hypoallergenic: boolean
        }
    }[],
    links: {
      self: string,
      current: string,
      next: string,
      last: string
    }
  }
}

export{}