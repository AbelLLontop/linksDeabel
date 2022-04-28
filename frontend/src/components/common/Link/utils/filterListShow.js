

export const filterListShow = (links)=>{
    const filters = {};
    links.map((link) => {
      const linkValide = filters[link.nameCategory]?.links;
      filters[link.nameCategory] = {
        category: link.nameCategory,
        links: linkValide ? [...linkValide, link] : [link],
        dates: {},
      };
    });
    
    const arrayFilterCategory = Object.values(filters);
    
    arrayFilterCategory.map((filter) => {
      filter.links.map((link) => {
        const dateLink = new Date(link.created_at);
        const dateString = dateLink.toLocaleDateString();
        const linkValideDate = filter.dates[dateString]?.links;
        filter.dates[dateString] = {
          date: dateString,
          links: linkValideDate ? [...linkValideDate, link] : [link],
        };
      });
      filter.links = [];
      const arrayFilterData = Object.values(filter.dates);
      filter.dates = arrayFilterData;
    });

    return arrayFilterCategory;
}

