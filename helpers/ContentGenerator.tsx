export function GetRandomIpsum(max: number): string {
    const sentences = lorem.split('.');
    const rndMax = Math.floor(Math.random() * (max -1 )) + 1;
    const rndIndex = Math.floor(Math.random() * (sentences.length - rndMax));
    return sentences.slice(rndIndex, rndIndex + rndMax).join(' ');
}

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar aliquam turpis, quis dignissim sapien tincidunt quis. Proin maximus sed arcu vel feugiat. Sed ut quam rutrum, rutrum nisi non, porta lorem. Quisque sodales augue dui, in ornare sem tempus vel. Donec non lorem dolor. Nam bibendum augue eget dolor ultricies, vitae pellentesque arcu vestibulum. Quisque gravida tortor id dignissim luctus. Nam molestie at massa a malesuada. Quisque porttitor ipsum eros, a convallis nisi euismod bibendum. Vivamus mollis pretium neque, eu ornare odio pretium et. Maecenas mattis, magna ac bibendum ullamcorper, leo velit blandit nibh, at elementum nisi mi nec nisl. Aenean euismod justo nec magna placerat sollicitudin. Quisque condimentum dictum dolor vitae fermentum. Fusce finibus fermentum imperdiet. Donec eget sapien ut urna convallis laoreet.
Donec sagittis tempor sagittis. Proin a nisl vel augue suscipit volutpat et ac metus. Maecenas tempus, dui in congue tristique, turpis nibh scelerisque lacus, ut blandit lorem enim a risus. Mauris eget ante ut erat mattis aliquet id non quam. Nulla tristique aliquet quam nec faucibus. Curabitur ac bibendum tortor. Pellentesque volutpat, dui sed gravida ullamcorper, turpis justo dignissim leo, id tristique elit elit et dui. Sed neque nibh, vulputate eget volutpat eget, porta nec urna. Phasellus pellentesque congue erat, ut facilisis tellus congue in. Duis dapibus justo quis ante dignissim, quis pharetra urna tincidunt. In lobortis placerat volutpat. Aenean nulla ex, rutrum ut tortor ac, ornare ullamcorper sapien.
Sed nec risus sollicitudin, lacinia risus quis, pulvinar ex. Duis non urna aliquam, pulvinar nulla eu, porta mi. Vestibulum augue mauris, ultrices sed scelerisque eu, condimentum eu orci. Nullam quis massa sit amet justo eleifend tristique in ut risus. Nunc blandit, lorem eu luctus dignissim, velit nibh molestie lacus, sit amet rhoncus eros ipsum sit amet nisl. Ut sit amet odio non mi mattis auctor et a tortor. Donec commodo magna eget venenatis dignissim. Vivamus metus dui, porta sit amet metus quis, volutpat blandit dui. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula leo. Curabitur sit amet cursus lectus. Aenean nec justo arcu. Phasellus a enim nec massa vestibulum suscipit. Ut at felis eros. Integer auctor malesuada mi, in laoreet ligula consequat id.
Nunc ut pharetra purus, non euismod tortor. Nam porttitor leo nibh. Nunc tincidunt porta turpis, non interdum leo efficitur eu. Sed feugiat augue sed arcu pulvinar auctor. Suspendisse accumsan, dolor quis finibus porttitor, tellus purus iaculis orci, et sollicitudin velit mauris laoreet turpis. Morbi condimentum quam a condimentum semper. Pellentesque eu magna vitae odio euismod accumsan vel venenatis mi. Praesent iaculis est non pharetra pulvinar. Integer tristique aliquam fermentum. Nunc in congue nisl. Nunc nec lectus est. Sed at magna a lorem porta finibus vel in libero. Donec vel elit eros.
Donec vitae tortor nibh. Integer tortor augue, viverra id scelerisque id, feugiat quis nibh. Curabitur ut malesuada neque. Vestibulum eleifend ex quis tortor interdum, sit amet sodales diam porta. Phasellus vel volutpat tellus. Nullam posuere condimentum nisl quis tempor. Ut arcu est, lacinia sed fringilla in, luctus et massa. Nam a odio nec ex condimentum egestas. Integer venenatis ac quam vel dapibus. Ut augue nisl, pharetra dapibus felis a, congue lobortis ipsum. Vivamus sit amet cursus neque, sed mattis sapien. Aliquam eu purus fermentum, porta odio a, gravida felis. Maecenas dapibus elit ac metus varius, vel tincidunt purus vehicula. Sed pretium scelerisque arcu gravida laoreet. Maecenas at dapibus est, nec mattis est.`