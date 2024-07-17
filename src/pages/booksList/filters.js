import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

const FiltersComponent = ({ setQueryParams }) => {
  const [selectedFilters, setSelectedFiters] = useState({});

  const filters = [
    {
      id: "Availability",
      name: "Availability",
      options: [
        {
          value: "includeOutOfStock",
          label: "Include out of stock",
          checked: true,
        },
      ],
    },
    {
      id: "Genres",
      name: "Genres",
      options: [
        { value: "Fiction", label: "Fiction", checked: false },
        { value: "Mystery", label: "Mystery", checked: false },
        { value: "Horror", label: "Horror", checked: false },
        { value: "Comics", label: "Comics", checked: false },
        { value: "Romance", label: "Romance", checked: false },
        { value: "Crime", label: "Crime", checked: false },
        { value: "Novel", label: "Novel", checked: false },
      ],
    },
  ];

  const generateDefaultStateForFilters = () => {
    const defaultState = {};
    filters.forEach((filter) => {
      defaultState[filter.id] = filter.options
        .filter((option) => option.checked)
        .map((option) => option.value);
    });
    setSelectedFiters(defaultState);
  };

  useEffect(() => {
    generateDefaultStateForFilters();
  }, []);

  useEffect(() => {
    let queryParam = "";
    if (selectedFilters?.Availability?.includes("includeOutOfStock")) {
      queryParam = "includeOutOfStock=true";
    } else {
      queryParam = "includeOutOfStock=false";
    }
    if (selectedFilters?.Genres?.length > 0) {
      queryParam += selectedFilters.Genres.map(
        (genre) => `&genre=${genre}`
      ).join("");
    }
    setQueryParams(queryParam);
  }, [selectedFilters]);

  const handleFormChange = (e) => {
    if (e.target.checked) {
      setSelectedFiters({
        ...selectedFilters,
        [e.target.name]: [...selectedFilters[e.target.name], e.target.value],
      });
    } else {
      setSelectedFiters({
        ...selectedFilters,
        [e.target.name]: selectedFilters[e.target.name].filter(
          (item) => item !== e.target.value
        ),
      });
    }
  };

  return (
    <div>
      {filters.map((section) => (
        <Disclosure
          defaultOpen
          key={section.id}
          as="div"
          className="border-b border-gray-200 py-6"
        >
          <h3 className="-my-3 flow-root">
            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">{section.name}</span>
              <span className="ml-6 flex items-center">
                <PlusIcon
                  aria-hidden="true"
                  className="h-5 w-5 group-data-[open]:hidden"
                />
                <MinusIcon
                  aria-hidden="true"
                  className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </DisclosureButton>
          </h3>
          <DisclosurePanel className="pt-6">
            <div className="space-y-4">
              {section.options.map((option, optionIdx) => (
                <div key={option.value} className="flex items-center">
                  <input
                    defaultValue={option.value}
                    defaultChecked={option.checked}
                    id={`filter-${section.id}-${optionIdx}`}
                    name={`${section.id}`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={(e) => handleFormChange(e)}
                  />
                  <label
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  );
};

export default FiltersComponent;
