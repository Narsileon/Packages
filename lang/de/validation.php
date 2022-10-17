<?php

return [
    'accepted'             => ':Attribute muss akzeptiert werden.',
    'accepted_if'          => ':Attribute muss akzeptiert werden, wenn :other :value ist.',
    'active_url'           => ':Attribute ist keine gültige Internet-Adresse.',
    'after'                => ':Attribute muss ein Datum nach :date sein.',
    'after_or_equal'       => ':Attribute muss ein Datum nach :date oder gleich :date sein.',
    'alpha'                => ':Attribute darf nur aus Buchstaben bestehen.',
    'alpha_dash'           => ':Attribute darf nur aus Buchstaben, Zahlen, Binde- und Unterstrichen bestehen.',
    'alpha_num'            => ':Attribute darf nur aus Buchstaben und Zahlen bestehen.',
    'array'                => ':Attribute muss ein Array sein.',
    'attached'             => 'This :attribute is already attached.',
    'before'               => ':Attribute muss ein Datum vor :date sein.',
    'before_or_equal'      => ':Attribute muss ein Datum vor :date oder gleich :date sein.',
    'between'              =>
    [
        'array'   => ':Attribute muss zwischen :min & :max Elemente haben.',
        'file'    => ':Attribute muss zwischen :min & :max Kilobytes groß sein.',
        'numeric' => ':Attribute muss zwischen :min & :max liegen.',
        'string'  => ':Attribute muss zwischen :min & :max Zeichen lang sein.',
    ],
    'boolean'              => ':Attribute muss entweder \'true\' oder \'false\' sein.',
    'confirmed'            => ':Attribute stimmt nicht mit der Bestätigung überein.',
    'current_password'     => 'Das Passwort ist falsch.',
    'date'                 => ':Attribute muss ein gültiges Datum sein.',
    'date_equals'          => ':Attribute muss ein Datum gleich :date sein.',
    'date_format'          => ':Attribute entspricht nicht dem gültigen Format für :format.',
    'declined'             => ':Attribute muss abgelehnt werden.',
    'declined_if'          => ':Attribute muss abgelehnt werden wenn :other :value ist.',
    'different'            => ':Attribute und :other müssen sich unterscheiden.',
    'digits'               => ':Attribute muss :digits Stellen haben.',
    'digits_between'       => ':Attribute muss zwischen :min und :max Stellen haben.',
    'dimensions'           => ':Attribute hat ungültige Bildabmessungen.',
    'distinct'             => ':Attribute beinhaltet einen bereits vorhandenen Wert.',
    'doesnt_end_with'      => ':Attribute darf nicht mit einem der folgenden enden: :values.',
    'doesnt_start_with'    => ':Attribute darf nicht mit einem der folgenden beginnen: :values.',
    'email'                => ':Attribute muss eine gültige E-Mail-Adresse sein.',
    'ends_with'            => ':Attribute muss eine der folgenden Endungen aufweisen: :values',
    'enum'                 => 'Der ausgewählte Wert ist ungültig.',
    'exists'               => 'Der gewählte Wert für :attribute ist ungültig.',
    'file'                 => ':Attribute muss eine Datei sein.',
    'filled'               => ':Attribute muss ausgefüllt sein.',
    'gt'                   =>
    [
        'array'   => ':Attribute muss mehr als :value Elemente haben.',
        'file'    => ':Attribute muss größer als :value Kilobytes sein.',
        'numeric' => ':Attribute muss größer als :value sein.',
        'string'  => ':Attribute muss länger als :value Zeichen sein.',
    ],
    'gte'                  =>
    [
        'array'   => ':Attribute muss mindestens :value Elemente haben.',
        'file'    => ':Attribute muss größer oder gleich :value Kilobytes sein.',
        'numeric' => ':Attribute muss größer oder gleich :value sein.',
        'string'  => ':Attribute muss mindestens :value Zeichen lang sein.',
    ],
    'image'                => ':Attribute muss ein Bild sein.',
    'in'                   => 'Der gewählte Wert für :attribute ist ungültig.',
    'in_array'             => 'Der gewählte Wert für :attribute kommt nicht in :other vor.',
    'integer'              => ':Attribute muss eine ganze Zahl sein.',
    'ip'                   => ':Attribute muss eine gültige IP-Adresse sein.',
    'ipv4'                 => ':Attribute muss eine gültige IPv4-Adresse sein.',
    'ipv6'                 => ':Attribute muss eine gültige IPv6-Adresse sein.',
    'json'                 => ':Attribute muss ein gültiger JSON-String sein.',
    'lt'                   =>
    [
        'array'   => ':Attribute muss weniger als :value Elemente haben.',
        'file'    => ':Attribute muss kleiner als :value Kilobytes sein.',
        'numeric' => ':Attribute muss kleiner als :value sein.',
        'string'  => ':Attribute muss kürzer als :value Zeichen sein.',
    ],
    'lte'                  =>
    [
        'array'   => ':Attribute darf maximal :value Elemente haben.',
        'file'    => ':Attribute muss kleiner oder gleich :value Kilobytes sein.',
        'numeric' => ':Attribute muss kleiner oder gleich :value sein.',
        'string'  => ':Attribute darf maximal :value Zeichen lang sein.',
    ],
    'mac_address'          => 'Der Wert muss eine gültige MAC-Adresse sein.',
    'max'                  =>
    [
        'array'   => ':Attribute darf maximal :max Elemente haben.',
        'file'    => ':Attribute darf maximal :max Kilobytes groß sein.',
        'numeric' => ':Attribute darf maximal :max sein.',
        'string'  => ':Attribute darf maximal :max Zeichen haben.',
    ],
    'max_digits'           => 'The :attribute must not have more than :max digits.',
    'mimes'                => ':Attribute muss den Dateityp :values haben.',
    'mimetypes'            => ':Attribute muss den Dateityp :values haben.',
    'min'                  =>
    [
        'array'   => ':Attribute muss mindestens :min Elemente haben.',
        'file'    => ':Attribute muss mindestens :min Kilobytes groß sein.',
        'numeric' => ':Attribute muss mindestens :min sein.',
        'string'  => ':Attribute muss mindestens :min Zeichen lang sein.',
    ],
    'min_digits'           => 'The :attribute must have at least :min digits.',
    'multiple_of'          => ':Attribute muss ein Vielfaches von :value sein.',
    'not_in'               => 'Der gewählte Wert für :attribute ist ungültig.',
    'not_regex'            => ':Attribute hat ein ungültiges Format.',
    'numeric'              => ':Attribute muss eine Zahl sein.',
    'password'             =>
    [
        'letters'       => ':Attribute muss mindestens einen Buchstaben beinhalten.',
        'mixed'         => ':Attribute muss mindestens einen Großbuchstaben und einen Kleinbuchstaben beinhalten.',
        'numbers'       => ':Attribute muss mindestens eine Zahl beinhalten.',
        'symbols'       => ':Attribute muss mindestens ein Sonderzeichen beinhalten.',
        'uncompromised' => ':Attribute wurde in einem Datenleck gefunden. Bitte wählen Sie ein anderes :attribute.',
    ],
    'present'              => ':Attribute muss vorhanden sein.',
    'prohibited'           => ':Attribute ist unzulässig.',
    'prohibited_if'        => ':Attribute ist unzulässig, wenn :other :value ist.',
    'prohibited_unless'    => ':Attribute ist unzulässig, wenn :other nicht :values ist.',
    'prohibits'            => ':Attribute verbietet die Angabe von :other.',
    'regex'                => ':Attribute Format ist ungültig.',
    'relatable'            => 'This :attribute may not be associated with this resource.',
    'required'             => ':Attribute muss ausgefüllt werden.',
    'required_array_keys'  => 'Dieses Feld muss Einträge enthalten für: :values.',
    'required_if'          => ':Attribute muss ausgefüllt werden, wenn :other den Wert :value hat.',
    'required_unless'      => ':Attribute muss ausgefüllt werden, wenn :other nicht den Wert :values hat.',
    'required_with'        => ':Attribute muss ausgefüllt werden, wenn :values ausgefüllt wurde.',
    'required_with_all'    => ':Attribute muss ausgefüllt werden, wenn :values ausgefüllt wurde.',
    'required_without'     => ':Attribute muss ausgefüllt werden, wenn :values nicht ausgefüllt wurde.',
    'required_without_all' => ':Attribute muss ausgefüllt werden, wenn keines der Felder :values ausgefüllt wurde.',
    'same'                 => ':Attribute und :other müssen übereinstimmen.',
    'size'                 =>
    [
        'array'   => ':Attribute muss genau :size Elemente haben.',
        'file'    => ':Attribute muss :size Kilobyte groß sein.',
        'numeric' => ':Attribute muss gleich :size sein.',
        'string'  => ':Attribute muss :size Zeichen lang sein.',
    ],
    'starts_with'          => ':Attribute muss mit einem der folgenden Anfänge aufweisen: :values',
    'string'               => ':Attribute muss ein String sein.',
    'timezone'             => ':Attribute muss eine gültige Zeitzone sein.',
    'unique'               => ':Attribute ist bereits vergeben.',
    'uploaded'             => ':Attribute konnte nicht hochgeladen werden.',
    'url'                  => ':Attribute muss eine URL sein.',
    'uuid'                 => ':Attribute muss ein UUID sein.',
    'attributes'           =>
    [
        'address'                  => 'adresse',
        'age'                      => 'alter',
        'amount'                   => 'amount',
        'answer'                   => 'antwort',
        'area'                     => 'gebiet',
        'available'                => 'verfügbar',
        'birthday'                 => 'geburtstag',
        'body'                     => 'körper',
        'category'                 => 'kategorie',
        'city'                     => 'stadt',
        'content'                  => 'inhalt',
        'country'                  => 'land',
        'created_at'               => 'erstellt am',
        'creator'                  => 'ersteller',
        'current_password'         => 'derzeitiges passwort',
        'date'                     => 'datum',
        'date_of_birth'            => 'geburtsdatum',
        'day'                      => 'tag',
        'deleted_at'               => 'gelöscht am',
        'description'              => 'beschreibung',
        'district'                 => 'bezirk',
        'duration'                 => 'dauer',
        'email'                    => 'e-mail-adresse',
        'excerpt'                  => 'auszug',
        'filter'                   => 'filter',
        'first_name'               => 'vorname',
        'gender'                   => 'geschlecht',
        'group'                    => 'gruppe',
        'hour'                     => 'stunde',
        'image'                    => 'bild',
        'last_name'                => 'nachname',
        'lesson'                   => 'lesson',
        'line_address_1'           => 'adresszeile 1',
        'line_address_2'           => 'adresszeile 2',
        'message'                  => 'nachricht',
        'middle_name'              => 'zweitname',
        'minute'                   => 'minute',
        'mobile'                   => 'handynummer',
        'month'                    => 'monat',
        'name'                     => 'name',
        'national_code'            => 'länderkennung',
        'number'                   => 'nummer',
        'password'                 => 'passwort',
        'password_confirmation'    => 'passwortbestätigung',
        'phone'                    => 'telefonnummer',
        'photo'                    => 'foto',
        'postal_code'              => 'postleitzahl',
        'price'                    => 'preis',
        'province'                 => 'provinz',
        'question'                 => 'frage',
        'recaptcha_response_field' => 'captcha-feld',
        'remember'                 => 'erinnern',
        'restored_at'              => 'wiederhergestellt am',
        'result_text_under_image'  => 'ergebnistext unter bild',
        'role'                     => 'rolle',
        'second'                   => 'sekunde',
        'sex'                      => 'geschlecht',
        'short_text'               => 'kurzer text',
        'size'                     => 'größe',
        'slug'                     => 'slug',
        'state'                    => 'bundesland',
        'street'                   => 'straße',
        'student'                  => 'schüler/student',
        'subject'                  => 'subject',
        'teacher'                  => 'lehrer',
        'terms'                    => 'bedingungen',
        'test_description'         => 'test beschreibung',
        'test_locale'              => 'test region',
        'test_name'                => 'test name',
        'text'                     => 'text',
        'thumbnail'                => 'miniaturbild',
        'time'                     => 'uhrzeit',
        'title'                    => 'titel',
        'updated_at'               => 'aktualisiert am',
        'username'                 => 'benutzername',
        'year'                     => 'jahr',
    ],
];
