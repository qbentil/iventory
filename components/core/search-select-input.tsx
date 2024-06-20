import { ArrowDown2, Like1 } from "iconsax-react";
import { FC, useState } from "react";

import { Combobox } from "@headlessui/react";
import _ from "lodash";
import { classNames } from "@/utils";

export interface Option {
  label: {
    title: string;
    imageUrl?: string;
  };
  value: string
}

interface SearchSelectInputProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  labelHidden?: boolean;
  values: any;
  errors?: any;
  touched?: any
  options: Option[],
  optionsLoading?: boolean;
  setFieldValue: any
}

const SearchSelectInput: FC<SearchSelectInputProps> = ({ id, options, values, setFieldValue, placeholder, label, errors, touched, required, labelHidden, disabled }) => {

  const [query, setQuery] = useState('')

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
        return option.label.title.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <Combobox as="div" disabled={disabled} value={_.get(values, id)} onChange={(val) => setFieldValue(id, val)}>
      {!labelHidden && (<Combobox.Label className="block text-sm font-medium text-gray-700">{label} {required ? <span className="text-red-500">*</span> : ""}</Combobox.Label>)}
      <div className={classNames(
        labelHidden ? "" : "mt-1",
        "relative"
      )}>
        <Combobox.Input
          className={classNames(
            disabled ? "cursor-not-allowed bg-gray-100" : "bg-white",
            "w-full rounded border border-gray-300 py-2 pl-3 pr-10 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm placeholder:font-light placeholder:text-xs",
            _.get(errors, id) ? "border-red-500" : "",
          )}
          placeholder={placeholder}
          autoComplete="none"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(option: any) => options.find(o => o.value === option)?.label?.title ?? ""}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r px-2 focus:outline-none">
          <ArrowDown2 className="h-5 w-5 text-gray-400" aria-hidden="true" variant="TwoTone" />
        </Combobox.Button>

        {filteredOptions.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <Combobox.Option
              value={""}
              className={({ active }) =>
                classNames(
                  'relative cursor-default select-none py-2 pl-3 pr-9 font-light',
                  active ? 'bg-primary-600 text-white' : 'text-gray-500'
                )
              }
            >
              {({ active, selected }) => (
                <>
                  <div className="flex items-center">
                    <span className={""}>Select One</span>
                  </div>

                  {selected && (
                    <span
                      className={classNames(
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                        active ? 'text-white' : 'text-primary-600'
                      )}
                    >
                      <Like1 className="h-5 w-5" aria-hidden="true" variant="TwoTone" />
                    </span>
                  )}
                </>
              )}
            </Combobox.Option>
            {filteredOptions.map((option) => (
              <Combobox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-primary-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      {option.label.imageUrl && <img src={option.label.imageUrl} alt="" className="h-6 w-6 flex-shrink-0 rounded-full object-cover" />}
                      <span className={classNames(
                        option.label.imageUrl ? 'ml-3' : '',
                        'truncate',
                        selected ? 'font-semibold' : ''
                      )}
                      >{option.label.title}</span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-primary-600'
                        )}
                      >
                        <Like1 className="h-5 w-5" aria-hidden="true" variant="TwoTone" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
      {_.get(errors, id) && _.get(touched, id) ? (
        <p className="mt-2 text-sm text-red-500" id={`${id}-error`}>
          {_.get(errors, id)}
        </p>) : null
      }
    </Combobox>
  )
}

export default SearchSelectInput;
