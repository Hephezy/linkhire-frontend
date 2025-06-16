"use client";

import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { seekerDropdown, employerDropdown } from '@/constants';
import { useUserType } from '@/hooks/useUserType';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ChevronDown } from 'lucide-react';

const ProfileDropDown = () => {
  const userType = useUserType();
  const dropdown = userType === "employer" ? employerDropdown : seekerDropdown;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex flex-row gap-1.5 items-center justify-center'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h1 className='text-base font-medium'>John Doe</h1>

          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 mt-5" align="center">
        <DropdownMenuGroup>
          {dropdown.map((item) => (
            <>
              <DropdownMenuItem>
                {item.label}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          ))}
          <DropdownMenuItem>
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropDown;